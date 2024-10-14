import React from 'react'

type Props = {
    formData: any; // Replace 'any' with the appropriate type for formData
    setFormData: (data: any) => void; // Replace 'any' with the appropriate type for the data being set
}

const ContactSection = (props: Props) => {

    const { formData, setFormData } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
  return (
    <div>ContactSection</div>
  )
}

export default ContactSection