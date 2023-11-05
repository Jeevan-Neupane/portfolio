const config={
    emailJsServiceId:String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    emailJsTemplateId:String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    emailJsPublicKey:String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
}

export default config;