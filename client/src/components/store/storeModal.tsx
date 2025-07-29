export const StoreModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (i: boolean) => void;
}) => {
  return (
    <div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/** Modal content for adding a new store */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Store</h2>
            {/* Add your form or content for adding a new store here */}
            <form>
              <div className="mb-4">
                <p className="block text-gray-700 mb-2">Store Name</p>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
                onClick={() => setModalOpen(false)}
              >
                Add Store
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
