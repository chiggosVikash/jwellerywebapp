import {
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";

const ShowDialog = ({ title, description, children,isOpen, }) => {
  return (
    <Dialog open = {isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
         {children}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShowDialog;
