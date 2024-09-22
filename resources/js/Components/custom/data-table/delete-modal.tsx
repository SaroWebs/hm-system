import { FC, useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

import { Icons } from "@/Components/Icons";
import { Button } from "../button";
import Stores from "@/lib/stores";

interface DeleteModalProps {
    title: string;
    description: string;
    onConfirm?: () => Promise<void>;
}

const DeleteModal: FC<DeleteModalProps> = ({
    title,
    description,
    onConfirm,
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const { refetch, setRefetch } = Stores();

    async function handleDelete() {
        await onConfirm?.();

        setRefetch(!refetch);
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <Button
                onClick={() => setOpen(true)}
                variant="destructive"
                leftIcon={<Icons.DeleteIcon className="w-4 h-auto" />}
            />

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                        className="bg-destructive hover:bg-destructive/90 text-white"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteModal;
