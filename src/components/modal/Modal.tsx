import { ReactNode, useCallback, useRef } from "react";
import { Modal } from "react-daisyui";
import { useMediaQuery } from "react-responsive";

interface Props {
  wrap: ReactNode;
  children: ReactNode;
  title?: string;
}

const MyModal = (props: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const isLg = useMediaQuery({ query: `(max-width: 992px)` });
  console.log(isLg);

  return (
    <div className="font-sans">
      <div style={{ cursor: "pointer" }} onClick={handleShow}>
        {props.wrap}
        <Modal
          className="lg:max-h-[calc(100svh)]"
          backdrop={true}
          responsive={!isLg}
          ref={ref}
        >
          {!isLg && props.title && (
            <Modal.Header className="font-bold">{props.title}</Modal.Header>
          )}
          <Modal.Body>{props.children}</Modal.Body>
          {/* <Modal.Actions>
            <form method="dialog">
              <Button>Close</Button>
            </form>
          </Modal.Actions> */}
        </Modal>
      </div>
    </div>
  );
};

export default MyModal;
