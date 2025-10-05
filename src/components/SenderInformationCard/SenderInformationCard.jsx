import { UserCircleIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function SenderInformationCard({ senderData }) {
  return (
    <div className="w-full bg-senaGray rounded-lg p-4 my-4 border border-senaWashedBlue flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      
      {/* Sección Izquierda: Información principal */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <UserCircleIcon className="w-10 h-10 text-senaGreen shrink-0" />
        <div className="min-w-0">
          <h4 className="font-bold text-base sm:text-lg truncate">
            {senderData.name || "Remitente desconocido"}
          </h4>
          <p className="text-sm text-gray-600 truncate">
            {senderData.position || "Cargo no especificado"}
          </p>
        </div>
      </div>

      {/* Sección Derecha: Contacto */}
      <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full sm:w-auto justify-start sm:justify-end text-sm">
        {senderData.email && (
          <div className="flex items-center gap-1">
            <EnvelopeIcon className="w-4 h-4 text-gray-500" />
            <span className="truncate">{senderData.email}</span>
          </div>
        )}
        {senderData.phone && (
          <div className="flex items-center gap-1">
            <PhoneIcon className="w-4 h-4 text-gray-500" />
            <span>{senderData.phone}</span>
          </div>
        )}
      </div>
    </div>
  );
}
