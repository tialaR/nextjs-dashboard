import { DeleteInvoice } from "./buttons";
import { deleteInvoice } from "@/app/lib/actions";

export default function DeleteInvoiceForm({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <DeleteInvoice />
    </form>
  );
}
