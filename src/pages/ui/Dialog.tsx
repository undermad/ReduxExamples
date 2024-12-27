import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal, AlertDialogTitle,
    AlertDialogTrigger
} from "@radix-ui/react-alert-dialog";

import Button from "../components/Button.tsx";

type DialogProps = {
    okCallback?: () => void,
    okText?: string,
    cancelCallback?: () => void,
    cancelText?: string,
    triggerText: string,
    title: string,
    description: string,
}

const Dialog = (props: DialogProps) => {


    return <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <AlertDialog>
            <AlertDialogTrigger
                className="text-white px-4 py-2 bg-amber-700 hover:bg-amber-600 border border-amber-700 rounded">
                {props.triggerText}
            </AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogOverlay className="fixed inset-0 bg-black/50"/>
                <AlertDialogContent
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-lg p-6 rounded-lg shadow-lg border border-gray-300">
                    <AlertDialogTitle className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                        {props.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm sm:text-base text-gray-600 mb-7">
                        {props.description}
                    </AlertDialogDescription>
                    <div className="flex flex-col sm:flex-row justify-end gap-4">
                        <AlertDialogCancel >
                            <button
                                onClick={() => props.cancelCallback && props.cancelCallback()}
                                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded">
                                {props.cancelText || "Cancel"}
                            </button>
                        </AlertDialogCancel>
                        <AlertDialogAction >
                            <Button
                                variant={"secondary"}
                                onClick={() => props.okCallback && props.okCallback()}>
                                {props.okText || "OK"}
                            </Button>
                        </AlertDialogAction>
                    </div>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialog>
    </div>
}

export default Dialog;
