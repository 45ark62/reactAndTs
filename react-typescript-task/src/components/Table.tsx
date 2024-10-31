import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle,vehicleTypeTitles } from "../data/vehicles/contracts";
interface Vehicles{
    vehicles:Vehicle[]
}
interface TableItemType{
    vehicle:Vehicle,
    number:number
}

const TableItem: React.FC<TableItemType> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
        </tr>
    );
};

export const Table: React.FC<Vehicles> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Цена, ₽</th>
                <th>Тип ТС</th>
            </tr>
            </thead>
            {vehicles.length>0? <tbody>
            {vehicles.map((x, i) => (
                <TableItem key={x.id} number={i + 1} vehicle={x} />
            ))}
            </tbody> :<tbody>Автомобиль по вашему запросу не найден</tbody>}
        </table>
    );
};
