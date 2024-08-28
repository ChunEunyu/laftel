import * as yup from 'yup';
import AuthBackground from './AuthBackground';
import { schema as authSchema } from '@/schemas/authSchema';
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { api } from '@/apis';
import { useAppDispatch } from '@/app/hooks';

type FormValues = {
    email: string;
    password: string;
}

const schema = authSchema;

const resolver: Resolver<FormValues> = yupResolver(schema);

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const onSubmit = handleSubmit(async (data) => {
        const formData = { ...data };
        
        try {
            const res = await api.post("/user/login", formData);
            sessionStorage.setItem('auth', JSON.stringify(res.data.info));
            alert('로그인에 성공했습니다!');
            navigate('/profile');

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const status = error.response.status;
                    const message = error.response.data.msg || error.response.data.message || 'An error occurred';
                    console.log(status, message);
                    alert(message);
                }
              } else {
                alert('이메일/비밀번호가 존재하지 않습니다.')
              }
        }
    });

  return (
    <AuthBackground>
        <div className='z-20 fixed w-[400px] h-[410px] border-[#323232] border-solid border bg-[#121212] py-7 px-9 tracking-tighter rounded-[12px] text-white flex flex-col items-start top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <form className='w-full relative' onSubmit={onSubmit}>
                <p className='absolute top-0 text-md text-[#fff] font-medium pb-4'>이메일로 시작</p>
                <div className='absolute top-12 flex flex-col w-full' >
                    <label className='font-medium text-sm mb-1'>
                        이메일
                    </label>
                    <input 
                        {...register("email")}
                        type='email'
                        className='focus:bg-black text-sm pt-1 pb-1 text-white bg-[#121212] border-b-[#323232] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-purple' 
                        placeholder='이메일을 입력해주세요'
                    />
                    {errors.email && <p className="text-xs text-red my-2">{errors.email.message}</p>}
                </div>
                <div className='absolute top-36 flex flex-col w-full' >
                    <label className='font-medium text-sm mb-1'>
                        비밀번호
                    </label>
                    <input 
                        {...register("password")}
                        type='password'
                        className='text-sm pt-1 pb-1 text-white bg-[#121212] border-b-[#323232] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-purple' 
                        placeholder='비밀번호를 입력해주세요'
                    />
                    {errors.password && <p className="text-xs my-2 text-red">{errors.password.message}</p>}
                </div>
                <button className='absolute top-[19rem] w-full bg-purple pt-2 pb-2 text-md rounded-md '>
                    다음
                </button>
            </form>
        </div>
    </AuthBackground>
  );
}
