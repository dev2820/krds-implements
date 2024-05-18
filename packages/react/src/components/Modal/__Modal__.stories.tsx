import { Button } from '../Button';
import {
  Modal,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from './Modal';

/**
 * API Reference: https://ui.shadcn.com/docs/componentsModal/
 */
export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px">
        <Modal>
          <ModalTrigger asChild>
            <Button>Share</Button>
          </ModalTrigger>
          <ModalContent className="sm:max-w-md">
            <ModalHeader>
              <ModalTitle>Share link</ModalTitle>
              <ModalDescription>
                Anyone who has this link will be able to view this.
              </ModalDescription>
            </ModalHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <label htmlFor="link" className="sr-only">
                  Link
                </label>
                <input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <button type="submit" className="px-3">
                <span className="sr-only">Copy</span>
              </button>
            </div>
            <ModalFooter className="sm:justify-end">
              <ModalClose asChild>
                <Button type="button" size="md">
                  Close
                </Button>
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
    );
  },
};
