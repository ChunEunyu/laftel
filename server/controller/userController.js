import jwt from 'jsonwebtoken';
import User from '../model/User.js';

// 회원가입
export const register = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    if (foundUser === null) {
        let { username, img, membership, email, password } = req.body;
        
        if (email.length && password.length) {
            const person = new User({
                name: username,
                img: img,
                membership: membership,
                email: email,
                password: password,
                ratings: [],
                wishlist: [],
                watchlist: [],
                reviews: [],
            });
            
            await person.save();

            return res.status(201).json({ person });
        } else {
            return res.status(400).json({msg: "이메일과 비밀번호를 입력해주세요"});
        }
    } else {
        return res.status(409).json({ msg: "이미 가입된 이메일입니다." });
    }
}

// 로그인
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
          msg: "이메일과 비밀번호를 입력해주세요.",
        });
    }

    let foundUser = await User.findOne({ email: req.body.email });
    
    if (foundUser) {
        const isMatch = await foundUser.comparePassword(password);
        
        if (isMatch) {
            const token = jwt.sign(
                { 
                    userId: foundUser._id 
                }, 
                process.env.JWT_SECRET, 
                { 
                    expiresIn: "1d" 
                }
            );

            const info = {
                email: foundUser.email,
                name: foundUser.name,
                img: foundUser.img,
                membership: foundUser.membership,
            }
            
            res.cookie('token', token, { httpOnly: true, secure: true });
            res.status(200).json({ msg: "로그인에 성공했습니다.", info });
        } else {
            return res.status(401).json({ msg: "비밀번호가 틀립니다." });
        }
    } else {
        return res.status(400).json({ msg: "로그인에 실패했습니다." });
    }
};

// 로그아웃
export const logout = async (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'strict' // CSRF 보호 설정
    });
    res.send({ success: true });
};




