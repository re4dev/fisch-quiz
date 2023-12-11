'use client'

import { CaptchaRequest } from '@/types/captchaRequest';
import { Email } from '@/types/email';
import { Input, Textarea, Button } from '@nextui-org/react'
import React, { FormEvent, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [captcha, setCaptcha] = useState<string | null>();

  const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  async function sendMail(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const fullMail: Email = {mailAdress: email, name: name, subject: "FischQuiz", body: text};
    const captchaResponse: CaptchaRequest = {token: captcha!}

    if(captcha){
      try {
        const url: string = process.env.NEXT_PUBLIC_API_URL_LOCAL as string;
        const res = await fetch(`${url}/mail/verify`, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(captchaResponse)
        });
      }catch(err) {
        setResponse("Captcha invalid.");
      }

      try {
        const url: string = process.env.NEXT_PUBLIC_API_URL_LOCAL as string;
        const res = await fetch(`${url}/mail/send`, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(fullMail)
        });
        setResponse("Mail erfolgreich versendet.");
      } catch(err) {
        setResponse("Fehler beim versenden.");
      }
    }
    else{
      setResponse("Bitte Captcha bestätigen.")
    }
  }

  return (
    <div>
      <div className='w-fit pb-10 mx-auto pt-4'>
          <p className='text-2xl lg:text-3xl font-semibold text-black'>Kontakt</p>
      </div>
      <div className='w-2/4 mx-auto'>
        <form onSubmit={sendMail}>
            <Input type='text' placeholder='Name' label='Name' width="300px" className='mb-5' isRequired value={name} onValueChange={setName}></Input>
            <Input type='email' placeholder='E-Mail' label='E-Mail' width="300px" className='mb-5' isRequired value={email} onValueChange={setEmail} isInvalid={isInvalid}></Input>
            <Textarea type='text' placeholder='Text' label='Beschreibung' fullWidth isRequired value={text} onValueChange={setText} ></Textarea>
            <div className='flex justify-between align-middle h-15 mt-2'>
              <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setCaptcha}></ReCAPTCHA>
              <Button  type='submit' className="h-10 my-auto" disabled={(email != "" && name != "" && text != "" && captcha != null && !isInvalid) ? false : true}>Absenden</Button>
            </div>
        </form>
        <div className="h-5 mt-2">
          <p>{response}</p>
        </div>
      </div>
    </div>
  )
}