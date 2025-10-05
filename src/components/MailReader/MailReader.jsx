// MailReader.jsx
import SenderInformationCard from "@/components/SenderInformationCard/SenderInformationCard";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; 


export default function MailReader({ selectedMail, onDeselectMail }) {
    
    if (!selectedMail) return <div className="w-full"></div>; 

    const senderData = {
        name: selectedMail.sender,
        // Aquí puedes incluir otros datos del remitente si existen en selectedMail
        // id: selectedMail.senderId,
        // email: selectedMail.senderEmail,
        // phone: selectedMail.senderPhone
    };

    return (
        
        <div className="h-full w-full shadow-xl rounded-lg p-6 overflow-y-auto flex flex-col bg-white"> 
            
            
            <button 
                onClick={onDeselectMail} 
                className="flex items-center mb-4 text-senaGreen font-semibold hover:text-senaWashedGreen self-start"
            >
                <ArrowLeftIcon className="w-5 mr-2" /> Volver a la Bandeja
            </button>

            
            
            <div id="tag-container" className="flex flex-wrap gap-2">
                <div className="px-4 py-0.5 bg-senaGreen rounded-md font-bold text-white">
                    {selectedMail.type || 'N/A'}
                </div>
                
                <div className="px-4 py-0.5 bg-senaGray rounded-md font-bold">
                    Primer Contacto
                </div>
            </div>


            <div id="serial-data" className="flex flex-wrap gap-3 my-2">
                
                <div className="font-bold text-lg">ID: {selectedMail.id || 'N/A'}</div>
                
                <div className="font-bold text-lg">{selectedMail.receivedDate || 'N/A'}</div>
            </div>


            <div>
                
                <h2 className="font-bold text-xl">{selectedMail.subject || 'Sin Asunto'}</h2>
                
                <h3>
                    {selectedMail.subject || 'Sin Asunto'}
                </h3>
            </div>


            <SenderInformationCard senderData={senderData} />


            <div id="email-description" className="mt-4">
                <div className="font-bold text-lg mb-2">Descripción</div>
                <p className="text-justify">
                    {selectedMail.fullContent || 'No hay contenido disponible para este documento.'}
                </p>
            </div>


            <div className="my-3">
                <div className="font-bold text-lg mb-2">Soportes Adjuntos</div>
                
                {/* Nota: Este div mostrará la imagen sin importar si hay adjunto,
                    deberías usar una lógica condicional aquí basada en selectedMail.hasAttachment
                */}
                <img className="w-40" src="/images/attached-pdf.png" alt="" />
            </div>


            <div className="w-full flex flex-col">
                <textarea
                    className="textarea w-full rounded-lg focus:outline-gray-200 my-2"
                    placeholder="Escribe tu respuesta..."
                />
                <button className="btn bg-senaGreen p-2 hover:bg-senaWashedGreen text-white rounded-lg self-end">
                    Enviar respuesta
                </button>
            </div>
        </div>
    );
}