import User from '../model/User.js';

// 멤버십 가입
export const joinMembership = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    
    // 멤버십 상태 업데이트
    try {
        if (foundUser) {
            foundUser.membership = true;
            await foundUser.save();

            const info = {
                email: foundUser.email,
                name: foundUser.name,
                img: foundUser.img,
                membership: foundUser.membership,
            }

            res.status(200).json({ message: '멤버십 가입 성공', info });
        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '멤버십 가입 실패' });
    }
}

// 멤버십 취소
export const cancelMembership = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    
    // 멤버십 상태 업데이트
    try {
        if (foundUser) {
            foundUser.membership = false;
            await foundUser.save();

            const info = {
                email: foundUser.email,
                name: foundUser.name,
                img: foundUser.img,
                membership: foundUser.membership,
            }

            res.status(200).json({ message: '멤버십 취소 성공', info });
        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '멤버십 취소 실패' });
    }
}