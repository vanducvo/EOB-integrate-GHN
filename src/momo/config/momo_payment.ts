export const momoConfig = {
    initPaymentEndpoint: 'https://test-payment.momo.vn/gw_payment/transactionProcessor',
    partnerCode : 'MOMO2GYE20201214',
    accessKey: 'j0SJl13EJTFJHLDe',
    secretKey: '6M05IE0XbCkBayQ2RWdTnXUoM4u3OLuV',
    requestType: "captureMoMoWallet",
    notifyUrl: "https://backend-tmdt.herokuapp.com/ipn-payment", // need to change
    returnUrl: "https://demo-tmdt.herokuapp.com/", // need to change
}