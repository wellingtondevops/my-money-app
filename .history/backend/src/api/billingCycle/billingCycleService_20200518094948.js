const BillingCycle = require('./billingCycle')


BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.route('count',(req,res,next) =>{
    BillingCycle.count((error, value)=>{
        if(error){
            
        }
        
    })
    
})


module.exports = BillingCycle
