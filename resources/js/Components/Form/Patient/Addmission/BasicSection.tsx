import React from 'react'

type Props = {
    formData: any;
    setFormData: (data: any) => void; 
}

const BasicSection = (props: Props) => {
    const { formData, setFormData } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>BasicSection</div>
    )
}

export default BasicSection