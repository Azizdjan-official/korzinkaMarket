import { Dialog } from '@headlessui/react'

const Modal = ({children,isOpen,setIsOpen}) => {

    return (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed bg-[#00000090]  inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="w-full p-5 max-w-[500px] rounded bg-white">
              <Dialog.Title><h1 className='text-xl font-bold bg-[#FBC100] p-3 rounded-xl my-2'>Please Complete Your Order Below</h1></Dialog.Title>
              {children}
            </Dialog.Panel>
          </div>
        </Dialog>
      )
}

export default Modal
