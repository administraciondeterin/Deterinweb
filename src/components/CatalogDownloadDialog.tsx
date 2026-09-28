import React from 'react';
import { Download, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { catalogs } from '../data/catalogs';

type CatalogDownloadDialogProps = {
  children: React.ReactNode;
};

const CatalogDownloadDialog = ({ children }: CatalogDownloadDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Descarga de catálogos</DialogTitle>
          <DialogDescription>
            Selecciona el catálogo que quieres descargar en PDF.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {catalogs.map((catalog) => (
            <div
              key={catalog.url}
              className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-6 w-6 text-[#019EE1]" />
                <div>
                  <h3 className="font-semibold text-gray-900">{catalog.title}</h3>
                  <p className="text-sm text-gray-600">{catalog.description}</p>
                </div>
              </div>
              <a
                href={catalog.url}
                download
                className="inline-flex items-center justify-center rounded-lg bg-[#019EE1] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#017bb0]"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar
              </a>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CatalogDownloadDialog;
