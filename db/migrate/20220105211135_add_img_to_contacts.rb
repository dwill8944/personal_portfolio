class AddImgToContacts < ActiveRecord::Migration[6.1]
  def change
    add_column :contacts, :img, :string
  end
end
