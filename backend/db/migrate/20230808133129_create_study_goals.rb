class CreateStudyGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :study_goals do |t|
      t.integer :user_id
      t.string :category
      t.string :study_goal

      t.timestamps
    end
  end
end
