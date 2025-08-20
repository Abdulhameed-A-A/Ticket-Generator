import { useState } from 'react';
import AvatarUpload from './AvatarUpload';
import FormInput from './FormInput';
import { validateEmail } from '../../utils/formValidation';
import { validateFile } from '../../utils/fileValidation';
import { type UserData } from '../../types';

interface RegistrationFormData {
  name: string;
  email: string;
  userName: string;
  avatar: File | null;
}

export default function RegistrationForm({ onSubmit }: { onSubmit: (data: UserData) => void }) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    userName: '',
    avatar: null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (formData.avatar && !validateFile(formData.avatar)) {
      newErrors.avatar = 'File too large. Please upload under 888KB';
    }

    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    const avatarUrl = formData.avatar ? URL.createObjectURL(formData.avatar) : null;

    onSubmit({
      ...formData,
      avatar: avatarUrl
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow border border-gray-200 md:p-8 md:rounded-xl">
      <h1 className="text-xl font-bold text-gray-800 mb-2 md:text-2xl">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-sm text-gray-600 mb-4 md:text-base md:mb-6">
        Secure your spot at next year's biggest coding conference.
      </p>

      <div className="space-y-3 md:space-y-4">
        <AvatarUpload
          onFileChange={(file) => setFormData({ ...formData, avatar: file })}
          error={errors.avatar}
        />

        <FormInput
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
        />

        <FormInput
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          placeholder="example@email.com"
        />

        <FormInput
          label="Github Username"
          value={formData.userName}
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          prefix="@"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition md:mt-6 md:py-3 md:text-base"
      >
        Generate My Ticket
      </button>
    </form>
  );
}