import React from 'react'
import  {useRef,useEffect} from 'react'

export default function Paypal() {
    
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                        description: "plane ticket",
                        amount: {
                            currency_code : "GBP",
                            value:39.99
                        }
                    }]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        })
            .render(paypal.current)
    }, [])
    
    
    
    
    
    return (
        
        <div>
            <div ref={paypal}>

            </div>
        </div>
    )
}
