export const required  = value => (value ? undefined : 'The field can not be empty!');
export const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);
export const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const minLenght = (min) => (value) => (value && value.toString().length() < min ? `Should be a minimum length of ${min}`: undefined);
export const maxLenght = (max) => (value) => ( value && value.toString().length() > max ? `Should be a maximum length of ${max}` : undefined);
export const pattern = (pattern) => (value) =>( pattern && value && !value.match(pattern) ? 'Invalid value!' : undefined );
export const composeValidators = (...validators) => (value) =>(
         validators.reduce(
           (error, validator) => error || validator(value),
           undefined
  ));