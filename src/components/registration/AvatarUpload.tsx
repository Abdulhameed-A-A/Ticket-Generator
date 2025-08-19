import { useCallback, useState, type ChangeEvent, type DragEvent } from "react"

type Props = {
  onFileChange: (file: File | null) => void,
  error?: string
}

const AvatarUpload = ({onFileChange, error}: Props) => {
  const [preview, setPreview] = useState<string | null>(null);

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      onFileChange(file);
    };
    reader.readAsDataURL(file);
  }

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) processFile(e.target.files[0])
  };
   

  return (
    <div className="mb-4">
      <h2 className="text-base font-semibold mb-2 md:text-lg">Upload Avatar</h2>
      <div
        onChange={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById('avatar-upload')?.click()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer ${
          error ? 'border-red-500' : 'border-gray-300'
        } md:p-6`}
      >
        {preview ? (
          <img src={preview} alt="Preview" className="w-20 h-20 rounded-full mx-auto md:w-24 md:h-24" />
        ) : (
          <p className="test-sm md:textt-base">Drag and Drop or click to upload</p>
        )}
        <input 
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden" 
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1 md:text-sm">{error}</p>}
    </div>
  )
}

export default AvatarUpload