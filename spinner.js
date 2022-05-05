const { Spinner } = require('cli-spinner')

// amount of seconds times 1000
const SPINNER_LIMIT = 5 * 1000

const huskyMessage = '[Husky] -> Verifying coding format...\n'
const spinnerProgress = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'

const spinner = new Spinner(huskyMessage)
spinner.setSpinnerString(spinnerProgress)
spinner.start()
