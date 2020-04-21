var Singleton = (function () {
  var instance

  function create () {
    return new Object()
  }

  return {
    getInstance: function () {
      console.count('[Singleton] getInstance')
      if (!instance) {
        instance = create()
        return instance
      } else {
        return instance
      }
    },
    getName: function () {
      return instance.name
    },
    saveName: function (value) {
      instance.name = value
      return this
    }
  }
})()

module.exports = {
  context: {
    storage: Singleton
  },
  prompts () {
    return [
      {
        name: 'name',
        message: "What is the component's name?",
        default:
          this.outFolder.toUpperCase().slice(0, 1) +
            this.outFolder.toLowerCase().slice(1, this.outFolder.length) ||
          'Home',
        filter: value => {
          if ((value + '').includes(' ')) {
            const terms = value.split(' ')
            const toReturn = terms.reduce((prev, cur) => {
              return (
                prev +
                cur.toUpperCase().slice(0, 1) +
                cur.toLowerCase().slice(1, cur.length)
              )
            }, '')
            // this.context.storage.saveName(toReturn)
            return toReturn
          } else {
            const toReturn =
              value.toUpperCase().slice(0, 1) +
              value.toLowerCase().slice(1, value.length)
            // this.context.storage.saveName(toReturn)
            return toReturn
          }
        }
      },
      {
        name: 'selector',
        message: "What is the name of the component's selector?",
        default: 'ad-' + this.outFolder.toLowerCase()
      },
      {
        name: 'fileName',
        message:
          "What is the name of the new component's file prefix (e.g. [home].component.ts)?",
        default: this.outFolder.toLowerCase()
      }
    ]
  },
  actions: function () {
    return [
      {
        type: 'add',
        files: '**'
      },
      {
        type: 'move',
        patterns: {
          'tmp.component.ts': `${this.answers.name.toLowerCase()}.component.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'tmp.component.html': `${this.answers.name.toLowerCase()}.component.html`
        }
      },
      {
        type: 'move',
        patterns: {
          'tmp.component.scss': `${this.answers.name.toLowerCase()}.component.scss`
        }
      },
      {
        type: 'move',
        patterns: {
          'tmp.module.ts': `${this.answers.name.toLowerCase()}.module.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'tmp.routes.ts': `${this.answers.name.toLowerCase()}.routes.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'tmp.state.ts': `${this.answers.name.toLowerCase()}.state.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'tmp.service.ts': `${this.answers.name.toLowerCase()}.service.ts`
        }
      }
    ]
  },
  async completed () {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
