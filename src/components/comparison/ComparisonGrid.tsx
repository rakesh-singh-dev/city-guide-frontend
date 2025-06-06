import React from "react";
import { City } from "../../types";
import { X } from "lucide-react";

interface Props {
  cities: City[];
  onRemoveCity: (id: string) => void;
}

const ComparisonGrid: React.FC<Props> = ({ cities, onRemoveCity }) => {
  if (cities.length === 0) return null;

  // Step 1: Gather all category keys that exist across cities
  const allCategoryKeys = Array.from(
    new Set(cities.flatMap((city) => Object.keys(city.categories || {})))
  );

  // Step 2: Build comparison rows by metric
  const buildMetricRows = (categoryKey: string) => {
    // gather all metric names across cities
    const metricNames = Array.from(
      new Set(
        cities.flatMap((city) =>
          city.categories?.[categoryKey]?.metrics?.map((m) => m.name) || []
        )
      )
    );

    return metricNames.map((metricName) => (
      <tr key={metricName} className="border-t text-sm">
        <td className="py-2 px-4 font-medium text-gray-600">{metricName}</td>
        {cities.map((city) => {
          const found = city.categories?.[categoryKey]?.metrics.find(
            (m) => m.name === metricName
          );
          return (
            <td key={city.id} className="py-2 px-4 text-right">
              {found?.value || "-"}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-3 px-4">Metric</th>
            {cities.map((city) => (
              <th key={city.id} className="py-3 px-4 text-right relative">
                <div className="flex justify-end items-center gap-2">
                  <div>
                    <div className="font-semibold">{city.name}</div>
                    <div className="text-xs text-gray-500">{city.country}</div>
                  </div>
                  <button
                    onClick={() => onRemoveCity(city.id)}
                    className="text-gray-400 hover:text-red-500"
                    title="Remove City"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {allCategoryKeys.map((categoryKey) => (
            <React.Fragment key={categoryKey}>
              <tr className="bg-blue-50">
                <td colSpan={cities.length + 1} className="py-3 px-4 font-semibold text-blue-800">
                  {cities[0].categories?.[categoryKey]?.title || categoryKey}
                </td>
              </tr>
              {buildMetricRows(categoryKey)}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonGrid;
