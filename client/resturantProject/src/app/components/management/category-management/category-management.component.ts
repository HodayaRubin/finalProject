import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/shared/modals/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';
import { EditCategoryDialogComponent } from '../edit-category-dialog/edit-category-dialog.component';


@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  categoryList: Category[] = [];
  error;

  constructor(
    public dialog: MatDialog,
    public categoryService: CategoryService,
    public menuService: MenuService,
    public managerService: ManagerService,
    ) { }

  ngOnInit(): void {
    this.getCategoryList()
  }
  openAddCategoryDialog() {
    this.dialog.open(AddCategoryDialogComponent);
  }
  openDeleteCategoryDialog(dataCategory) {
    this.dialog.open(DeleteCategoryDialogComponent, { data: dataCategory });
  }
  openEditCategoryDialog(dataCategory) {
    this.dialog.open(EditCategoryDialogComponent, { data: dataCategory });
  }
  getCategoryList() {
    return this.categoryService.getCategoryList().subscribe(
      (res: any) => {
        this.categoryList = res;
      },
      (err) => {
        this.error = err;
      });
  }
  getDoseCategory(idCategory: number) {
    this.managerService.subjectMenuManager.next(idCategory);
  }

}
