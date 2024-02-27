export const nameValidation = {
  required: "fill in the name field",
  maxLength: {
    value: 20,
    message: 'Max symbol 20 ',
  },
  minLength: {
    minLength: 2,
    message: 'Min symbol 20',
  },
  pattern: {
    value: /^[A-Z].*/,
    message: 'enter text in upper case'
  }
}

export const phoneValidation = {
  required: "fill in the phone number field",
  maxLength: {
    value: 20,
    message: 'Max symbol 20 '
  },
  minLength: {
    minLength: 2,
    message: 'Min symbol 20'
  },
}

export const emailValidation = {
  required: "fill in the email field",
  maxLength: {
    value: 20,
    message: 'Max symbol 20 '
  },
  minLength: {
    minLength: 2,
    message: 'Min symbol 20'
  },

  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  },
  message: 'invalid email'
}