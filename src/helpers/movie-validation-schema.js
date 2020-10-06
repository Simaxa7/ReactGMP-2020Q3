import * as Yup from 'yup';

const REQUIRED_ERROR_MESSAGE = 'Required';
const RUNTIME_FORMAT_ERROR_MESSAGE = 'Runtime must be a number > 0';
const GENRES_ERROR_MESSAGE = 'Select at least one genre to proceed';
const VALID_URL_REGEXP = '(http(s?):)|([/|.])*.(?:jpg|gif|png)';
// eslint-disable-next-line
const URL_ERROR_MESSAGE = 'Please enter a valid url or use default: https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';

const movieValidationSchema = Yup.object({
  title: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  posterPath: Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .matches(VALID_URL_REGEXP, URL_ERROR_MESSAGE),
  genres: Yup
    .array()
    .typeError(GENRES_ERROR_MESSAGE)
    .min(1, GENRES_ERROR_MESSAGE),
  overview: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  runtime: Yup
    .number()
    .typeError(RUNTIME_FORMAT_ERROR_MESSAGE)
    .min(0, RUNTIME_FORMAT_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
});

export default movieValidationSchema;
