const Api = async (fetchType: string, const_api_url: string, objData: any = {}, putAuthToken = true) => {
    let token: string;
    if (putAuthToken) {
        token = localStorage.getItem('token');
    }
    const header = new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + (token ? token : ''),
    });
    let resp: any = [];
    try {
        if (fetchType.toUpperCase() === 'GET' || (fetchType.toUpperCase() === 'DELETE' && objData.length === 0)) {
            resp = await fetch(
                process.env.REACT_APP_PROXY +
                    process.env.REACT_APP_API_URL +
                    const_api_url +
                    '&appid=' +
                    process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP,
                {
                    method: fetchType,
                    headers: header,
                },
            );
        } else {
            resp = await fetch(
                process.env.REACT_APP_PROXY +
                    process.env.REACT_APP_API_URL +
                    const_api_url +
                    '&appid=' +
                    process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP,
                {
                    method: fetchType,
                    headers: header,
                    body: JSON.stringify(objData),
                },
            );
        }
        const res = await resp.json();
        const errorCode = resp.status;

        if (errorCode === 403) {
            return {
                status: false,
                message: 'error status code 403',
            };
        } else if (errorCode === 500) {
            return {
                status: false,
                message: 'error status code 403',
            };
        }
        return res;
    } catch (e) {
        return {
            status: false,
            message: e.message,
        };
    }
};

export default Api;
