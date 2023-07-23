// src/components/SearchField.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type SearchFormData = {
  collegeName: string;
};

const SearchField: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>();

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    // You can handle the search logic here
    console.log(data.collegeName);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-4">
      <div className="flex">
        <input
          {...register("collegeName", { required: true })}
          className="border border-gray-300 px-4 py-2  rounded-lg w-full"
          placeholder="Search for a college name..."
        />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Search
      </button>
      {errors.collegeName && (
        <span className="text-red-500">College name is required</span>
      )}
      </div>

    </form>
  );
};

export default SearchField;
