import { XIcon } from 'lucide-react';

import { Button } from '../Button';
import { Typo } from '../Typo';
import {
  Modal,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
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
      <section className="p-4">
        <Modal>
          <ModalTrigger asChild>
            <Button>class 및 data-target 호출</Button>
          </ModalTrigger>
          <ModalContent className="max-w-xl max-h-[calc(100vh_-_2rem)]">
            <ModalHeader className="flex flex-row justify-between items-center">
              <ModalTitle>모달 제목</ModalTitle>
              <ModalClose asChild>
                <Button variant="text">
                  <XIcon size={20} />
                </Button>
              </ModalClose>
            </ModalHeader>
            <div className="overflow-y-scroll flex-1">
              <Typo.Title as="h3">내용 타이틀</Typo.Title>
              시작 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
              포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화
              상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나
              결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는
              사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이
              필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게
              작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러
              작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해
              알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을
              포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고
              중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수
              있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
              포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화
              상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나
              결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는
              사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이
              필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게
              작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러
              작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해
              알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을
              포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고
              중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수
              있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
              포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 끝
            </div>
            <ModalFooter className="justify-end flex flex-row gap-4">
              <ModalClose asChild>
                <Button variant="tertiary" type="button" size="md">
                  아니요
                </Button>
              </ModalClose>
              <ModalClose asChild>
                <Button variant="primary" type="button" size="md">
                  예
                </Button>
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
    );
  },
};
