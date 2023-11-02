function Input({
  id,
  setState,
  type
}: {
  id: string;
  setState: (value: number ) => void;
  type?: string;
}) {
  return (
    <div className="flex justify-center items-center">
      <input
        required
        type={type}
        id={id}
        placeholder={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(Number(e.target.value))
        }
        className="p-1 w-full md:w-[320px] focus:border-none rounded-md bg-gray-100 text-gray-900 text-center"
      />
    </div>
  );
}

export default Input;
