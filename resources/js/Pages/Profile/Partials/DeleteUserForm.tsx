import { useRef, useState, FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <button onClick={confirmUserDeletion} className="px-4 py-2 bg-red-600 text-white rounded-md">Delete Account</button>

            {confirmingUserDeletion && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg max-w-md">
                        <form onSubmit={deleteUser}>
                            <h2 className="text-lg font-medium text-gray-900">
                                Are you sure you want to delete your account?
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Once your account is deleted, all of its resources and data will be permanently deleted. Please
                                enter your password to confirm you would like to permanently delete your account.
                            </p>

                            <div className="mt-6">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm"
                                    placeholder="Password"
                                    autoFocus
                                />
                                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-3">
                                    Cancel
                                </button>
                                <button type="submit" disabled={processing} className="px-4 py-2 bg-red-600 text-white rounded-md">
                                    Delete Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
