import wepy from 'wepy'
import util from './util'
import _ from 'underscore'

const wxRequest =  (params = {}, url='') => {
    return new Promise((resolve,reject)=>{
        try{
            wepy.request({
                url:  url,
                method: params.method || 'GET',
                data: params.query || {},
                header: {
                    'Content-Type': 'application/json',
                },
            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        }catch(err){
            reject(err)
        }
    })
    
};


module.exports = {
    wxRequest
}
