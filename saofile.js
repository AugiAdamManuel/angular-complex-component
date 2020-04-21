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
        message: 'What is the name of the new component?',
        default:
          this.outFolder.toUpperCase().slice(0, 1) +
            this.outFolder.toLowerCase().slice(1, this.outFolder.length - 1) ||
          'Home',
        filter: value => {
          if ((value + '').includes(' ')) {
            const terms = value.split(' ')
            const toReturn = terms.reduce((prev, cur) => {
              return (
                prev +
                cur.toUpperCase().slice(0, 1) +
                cur.toLowerCase().slice(1, cur.length - 1)
              )
            }, '')
            // this.context.storage.saveName(toReturn)
            return toReturn
          } else {
            const toReturn =
              value.toUpperCase().slice(0, 1) +
              value.toLowerCase().slice(1, value.length - 1)
            // this.context.storage.saveName(toReturn)
            return toReturn
          }
        }
      },
      {
        name: 'selector',
        message: 'What is the name of the new component?',
        default: 'ad-' + this.outFolder.toLowerCase()
      },
      {
        name: 'fileName',
        message: 'What is the name of the new component?',
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
          'home.component.ts': `${this.answers.name.toLowerCase()}.component.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'home.component.html': `${this.answers.name.toLowerCase()}.component.html`
        }
      },
      {
        type: 'move',
        patterns: {
          'home.component.scss': `${this.answers.name.toLowerCase()}.component.scss`
        }
      },
      {
        type: 'move',
        patterns: {
          'home.module.ts': `${this.answers.name.toLowerCase()}.module.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'home.routes.ts': `${this.answers.name.toLowerCase()}.routes.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'home.state.ts': `${this.answers.name.toLowerCase()}.state.ts`
        }
      },
      {
        type: 'move',
        patterns: {
          'home.service.ts': `${this.answers.name.toLowerCase()}.service.ts`
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
