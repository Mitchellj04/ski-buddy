class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :difficulty, :groomed, :difficult_level

  def difficult_level
    level = []
    if self.object.difficulty == "Easy" 
      level = "Green"
    elsif self.object.difficulty == "More Difficult" 
      level = "Blue"
    elsif self.object.difficulty == "Very Difficult"
      level = "Black Diamond"
    else
      level = "Double Black Diamond"
    end
    level 
  end
end
