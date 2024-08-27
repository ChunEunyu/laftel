import * as yup from 'yup';

export const schema = yup.object({
    email: yup
      .string()
      .email('* 유효한 이메일 주소를 입력하세요.')
      .required('* 이메일은 필수 항목입니다.'),
    password: yup
      .string()
      .min(5, '* 비밀번호는 최소 5자 이상이어야 합니다.')
      .max(15, '* 비밀번호는 최대 15자 이하여야 합니다.')
      .required('* 비밀번호는 필수 항목입니다.')
}).required('* 이메일과 비밀번호를 입력해주세요');