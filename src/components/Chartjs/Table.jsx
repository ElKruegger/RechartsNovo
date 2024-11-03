import { Bar } from 'react-chartjs-2';
import React from 'react';

export default function TableChart() {
    const data = [
      {
        category: 'Contato Gestores',
        services: [
          { name: 'Gestores - ações', values: [0, 0, 0, 0, 0, 2, 9, 0, 0, 0, 0, 0], total: 11 },
        ],
      },
      {
        category: 'Fisioterapia/Personal',
        services: [
          { name: 'Condicionamento físico', values: [0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0], total: 8 },
          { name: 'Dúvidas gerais/orientação', values: [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], total: 2 },
        ],
      },
      {
        category: 'Psicológico',
        services: [
          { name: 'Ansiedade', values: [0, 1, 0, 0, 3, 0, 6, 0, 0, 1, 0, 0], total: 11 },
          { name: 'Depressão/Tristeza', values: [0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1], total: 4 },
        ],
      },
    ];
  
    return (
      <div className="overflow-x-auto p-8 shadow-lg rounded-md">
        <table className="w-full border-collapse text-lg">
          <thead>
            <tr className="bg-gray-100 text-black">
              <th className="border px-6 py-3">Serviço</th>
              {['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Total'].map((month) => (
                <th key={month} className="border px-6 py-3 text-center">{month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {/* Linha da categoria */}
                <tr className="bg-gray-100 font-semibold text-black">
                  <td className="border px-6 py-3" colSpan="14">{item.category}</td>
                </tr>
                {/* Linhas dos serviços */}
                {item.services.map((service, i) => (
                  <tr key={i} className="hover:bg-gray-100">
                    <td className="border px-6 py-3 pl-8 text-black">{service.name}</td>
                    {service.values.map((value, j) => (
                      <td key={j} className="border px-6 py-3 text-center text-black">{value}</td>
                    ))}
                    <td className="border px-6 py-3 text-center font-bold text-black">{service.total}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }