/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState} from 'react';

interface CreateVideoPageProps {
  onSave: (details: {title: string; description: string}) => void;
  onCancel: () => void;
}

/**
 * A page that allows the user to create a new video from a text prompt.
 * It provides input fields for the title and description, and buttons to
 * generate the video or cancel the action.
 */
export const CreateVideoPage: React.FC<CreateVideoPageProps> = ({
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    onSave({title, description});
  };

  const isSaveDisabled = !title.trim() || !description.trim();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl bg-gray-800 p-6 md:p-8 rounded-lg shadow-2xl">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Create a New Video
          </h1>
          <p className="text-gray-400">
            Bring your ideas to life with a descriptive prompt.
          </p>
        </header>

        <main>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300 mb-2">
              Video Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., A Cat Riding a Skateboard"
              aria-label="Video Title"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-2">
              Video Prompt
            </label>
            <textarea
              id="description"
              rows={10}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the scene, characters, actions, and style of the video you want to create."
              aria-label="Video Prompt"
            />
          </div>
        </main>

        <footer className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaveDisabled}
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
            Generate Video
          </button>
        </footer>
      </div>
    </div>
  );
};
