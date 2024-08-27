import jwt from 'jsonwebtoken';


export const authenticationMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    // 헤더 확인하기
    if (!token)
        return res.status(401).send("Access denied...No token provided...");

    // 토큰 검증하기
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decoded',decoded);
        const { _id, email } = decoded
        req.user = { _id, email };
        next();
    } catch (er) {
        // Incase of expired jwt or invalid token kill the token and clear the cookie
        res.clearCookie("token");
        return res.status(400).send(er.message);
    }
}

/*
export const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    // 헤더 확인하기
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({msg: "Unauthorized. Please add valid token"});
    }

    // 토큰 추출하기
    const token = authHeader.split(' ')[1]

    // 토큰 검증하기
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, name } = decoded
        req.user = { id, name }
        next()
    } catch (error) {
        return res.status(401).json({msg: "Unauthorized. Please add valid token"});
    }
}
*/
