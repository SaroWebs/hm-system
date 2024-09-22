import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUploadIcon } from "lucide-react";

interface FileUploaderProps {
    // files: File[] | undefined;
    files: string | undefined;
    onChange: (files: string) => void;
    uploadFolderName: string;
    url?: string;
    placeholder?: string;
    disabled?: boolean;
}

const FileUploader: FC<FileUploaderProps> = ({
    files,
    onChange,
    url,
    placeholder,
    disabled,
    uploadFolderName,
}) => {
    const [localFiles, setLocalFiles] = useState<File[] | undefined>();
    const [previewImage, setPreviewImage] = useState<boolean>(false);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        if (!acceptedFiles || acceptedFiles.length === 0) return;

        setLocalFiles(acceptedFiles);
        setPreviewImage(true);
    }, []);

    const onConfirm = async (url: string) => {
        onChange(url);
        setPreviewImage(false);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    const isImage = (file: string) => {
        return (
            file.split(".")[1] === "jpg" ||
            file.split(".")[1] === "jpeg" ||
            file.split(".")[1] === "png"
        );
    };

    return (
        <>
            <div
                {...getRootProps()}
                className="text-lg cursor-pointer rounded-md border border-dashed border-border bg-secondary"
            >
                <input disabled={disabled} {...getInputProps()} />
                {files ? (
                    <>
                        <div
                            onClick={() => {
                                if ((files || []).length) {
                                    window.open(
                                        process.env.NEXT_PUBLIC_IMAGE_URL! +
                                            files,
                                        "_blank"
                                    );
                                }
                            }}
                            className="w-full text-center p-5"
                        >
                            {isImage(files) ? (
                                <img
                                    src={
                                        process.env.NEXT_PUBLIC_IMAGE_URL! +
                                        files
                                    }
                                    alt="uploaded file"
                                    className="object-cover overflow-hidden"
                                />
                            ) : localFiles ? (
                                <>
                                    {localFiles[0].type.includes("image") ? (
                                        <img
                                            src={URL.createObjectURL(
                                                localFiles[0]
                                            )}
                                            alt="uploaded file"
                                            className="object-cover overflow-hidden"
                                        />
                                    ) : (
                                        <p>{localFiles[0].name}</p>
                                    )}
                                </>
                            ) : (
                                <p>
                                    {
                                        files.split("/")[
                                            files.split("/").length - 1
                                        ]
                                    }
                                </p>
                            )}
                        </div>

                        <div className="border-t border-border p-5 w-full flex items-center justify-center gap-2">
                            <CloudUploadIcon />
                            <p className="text-muted-foreground text-sm">
                                Change
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="p-5 flex flex-col items-center justify-center gap-3">
                        <CloudUploadIcon />
                        <div className="flex flex-col justify-center gap-2 text-center">
                            <p className="text-muted-foreground text-sm">
                                {placeholder ? placeholder : "Upload your file"}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* TODO: Implement image modal */}
            {/* <ImageModal
                open={previewImage}
                setOpen={setPreviewImage}
                files={localFiles}
                folderName={uploadFolderName}
                onConfirm={onConfirm}
            /> */}
        </>
    );
};

export default FileUploader;
