const { Spinner } = require('cli-spinner')

// amount of seconds times 1000
const SPINNER_LIMIT = 5 * 1000

const huskyMessage = '[Husky] -> Verifying coding format...'
const spinnerProgress = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'

const spinner = new Spinner(huskyMessage)
spinner.setSpinnerString(spinnerProgress)
spinner.start()

setTimeout(() => {
    spinner.stop()
}, SPINNER_LIMIT)
