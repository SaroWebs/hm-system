import { FC, useMemo, useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useStepper } from "headless-stepper";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import BasicSection from "@/Components/Form/Patient/Addmission/BasicSection";
import ContactSection from "@/Components/Form/Patient/Addmission/ContactSection";
import MedicalHistory from "@/Components/Form/Patient/Addmission/MedicalHistory";
import { Button } from "@/components/ui/button";

interface AdmissionProps {
    auth: any;
}

const Admission: FC<AdmissionProps> = (props) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: '',
        contact_number: '',
        email: '',
        address: '',
        emergency_contact_name: '',
        emergency_contact_number: '',
        insurance_provider: '',
        policy_number: '',
        last_visit_date: '',
        notes: '',
    });

    const steps = useMemo(
        () => [
            { label: "Basic", target:0, component: <BasicSection formData={formData} setFormData={setFormData}/>},
            { label: "Contact", target:1, component: <ContactSection  formData={formData} setFormData={setFormData}/>},
            { label: "Prev Record", target:2, component: <MedicalHistory  formData={formData} setFormData={setFormData}/>},
        ],
        []
    );

    const { state, stepperProps, stepsProps, progressProps, nextStep, prevStep } = useStepper({
        steps
    });

    const barSize = useMemo( () => Math.ceil((state.currentStep / (steps?.length - 1)) * 100), [state, steps] );


    return (
        <AdminLayout title="Admission" {...props}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="w-full">
                            <nav className="my-4 w-100 grid grid-cols-6 relative" {...stepperProps}>
                                <ol className="col-span-full flex flex-row z-1">
                                    {stepsProps?.map((step, index) => (
                                        <li className="text-center flex-[1_0_auto]" key={index}>
                                            <a
                                                className="group flex flex-col items-center cursor-pointer focus:outline-0"
                                                {...step}
                                            >
                                                <span
                                                    className={`flex items-center justify-center bg-white text-black w-8 h-8 border border-full rounded-full group-focus:ring-2 group-focus:ring-offset-2 transition-colors ease-in-out ${state?.currentStep === index
                                                            ? "bg-sky-500 text-white ring-2 ring-offset-2"
                                                            : ""
                                                        }`}
                                                >
                                                    {index + 1}
                                                </span>
                                                <span
                                                    className={`${state?.currentStep === index ? "font-bold" : ""
                                                        }`}
                                                >
                                                    {steps[index].label}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                                <div
                                    style={{ gridColumn: "2 / 8" }}
                                    className="flex items-center flex-row top-4 right-16 relative border-0.5 bg-gray-300 z-[-1] pointer-events-none row-span-full w-full h-0.5"
                                    {...progressProps}
                                >
                                    <span className="h-full w=full flex" />
                                    <div
                                        style={{
                                            width: `${barSize}%`,
                                            gridColumn: 1 / -1,
                                            gridRow: 1 / -1
                                        }}
                                        className="flex flex-row h-full overflow-hidden border-solid border-0 bg-sky-500"
                                    />
                                </div>
                            </nav>
                            <div className="">{steps.find(st=>st.target == state.currentStep)?.component}</div>
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex gap-2">
                                {state.hasPreviousStep ? <Button onClick={prevStep}>Prev</Button> : null}
                                {state.hasNextStep ? <Button onClick={nextStep}>Next</Button> : null}
                                </div>
                                
                                <div className="flex gap-2">
                                <Button>Submit</Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Admission;
