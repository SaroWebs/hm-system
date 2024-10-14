import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Stepper, Step } from 'headless-stepper/components'

interface AdmissionProps {
    auth: any;
}

const Admission: FC<AdmissionProps> = (props) => {
    return (
        <AdminLayout title="Admission" {...props}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="w-full">
                            <Stepper currentStep={0}>
                                <Step label="Basic Information">
                                    <div className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum dolorem saepe impedit magnam perspiciatis ullam eius doloremque, culpa maxime voluptates quisquam nobis a molestiae sint ex non commodi ab?
                                    </div>
                                </Step>
                                <Step label="step 2">
                                    <div className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea excepturi ratione nobis ipsa consequuntur totam explicabo, nisi aliquam accusamus molestiae, nulla quam corrupti sint quia vero libero blanditiis saepe.
                                    </div>
                                </Step>
                                <Step label="step 3">
                                    <div className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure magni earum tenetur itaque aperiam eos ipsa quasi. Obcaecati voluptatem quis alias magnam voluptate dignissimos dolorum facilis deserunt ab maxime.
                                    </div>
                                </Step>
                            </Stepper>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Admission;
