const PageButton = ({ buttonPage, buttonSetPage, buttonLoading, buttonTotalPages }) => {
    return(
        <div className="flex items-center justify-center gap-3 my-6">
            <button
                className="px-4 py-2 rounded-lg bg-zinc-800 disabled:opacity-40 cursor-pointer"
                disabled={buttonPage <= 1 || buttonLoading}
                onClick={() => buttonSetPage((prev) => prev - 1)}
            >
                Prev
            </button>

            <div className="text-sm opacity-80">
                Page {buttonPage} / {buttonTotalPages}
            </div>

            <button
                className="flex items-start justify-center px-4 py-2 rounded-lg bg-zinc-800 disabled:opacity-40 cursor-pointer"
                disabled={buttonPage >= buttonTotalPages || buttonLoading}
                onClick={() => buttonSetPage((prev) => prev + 1)}
            >
                Next
            </button>
        </div>
    )
}

export default PageButton