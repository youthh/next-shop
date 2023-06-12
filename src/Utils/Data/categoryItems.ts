export const categoryProduct: CategoryProductType[] = [
  {
    id: 2,
    category: "Coat and Jackets",
    subCategoryName: [
      { id: 1, subCategoryType: "Long Coat", checked: false },
      { id: 2, subCategoryType: "Short Dress", checked: false },
      { id: 3, subCategoryType: "Jogger", checked: false },
      { id: 4, subCategoryType: "Slim", checked: false },
      { id: 5, subCategoryType: "Skiny", checked: false },
      { id: 6, subCategoryType: "Buggy", checked: false },
    ],
  },

  {
    id: 3,
    category: "Dresses",
    subCategoryName: [
      { id: 1, subCategoryType: "Long Coat", checked: false },
      { id: 2, subCategoryType: "Short Dress", checked: false },
      { id: 3, subCategoryType: "Jogger", checked: false },
      { id: 4, subCategoryType: "Slim", checked: false },
      { id: 5, subCategoryType: "Skiny", checked: false },
      { id: 6, subCategoryType: "Buggy", checked: false },
    ],
  },

  {
    id: 4,
    category: "Playsuit",
    subCategoryName: [
      { id: 1, subCategoryType: "Long Coat", checked: false },
      { id: 2, subCategoryType: "Short Dress", checked: false },
      { id: 3, subCategoryType: "Jogger", checked: false },
      { id: 4, subCategoryType: "Slim", checked: false },
      { id: 5, subCategoryType: "Skiny", checked: false },
      { id: 6, subCategoryType: "Buggy", checked: false },
    ],
  },
  {
    id: 5,
    category: "Short",
    subCategoryName: [
      { id: 1, subCategoryType: "Long Coat", checked: false },
      { id: 2, subCategoryType: "Short Dress", checked: false },
      { id: 3, subCategoryType: "Jogger", checked: false },
      { id: 4, subCategoryType: "Slim", checked: false },
      { id: 5, subCategoryType: "Skiny", checked: false },
      { id: 6, subCategoryType: "Buggy", checked: false },
    ],
  },
];

type CategoryProductType = {
  id: number;
  category: string;
  subCategoryName: subCategoryType[];
};

type subCategoryType = {
  id: number;
  subCategoryType: string;
  checked: boolean;
};
