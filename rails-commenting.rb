# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)class BlogPostsController is inheriting functionality from the ApplicationController 
class BlogPostsController < ApplicationController
  def index
    # 2) get every item in the blostpost object and assign it to the instance variable posts
    @posts = BlogPost.all
  end

  def show
    # 3) assign a params to the .find method to find match the id of the query and assign it to the instance variable post
    @post = BlogPost.find(params[:id])
  end

  # 4) create a method named new
  def new
  end

  def create
    # 5) creating a new model and assigning to the instance variable post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) If it fails to destroy the blog post, it will redirect you to the post you intended to delete
      redirect_to blog_post_path(@post)
    end
  end

  # 7) makes 
  private
  def blog_post_params
    # 8) something, suggestion made by connor 
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)
class BlogPost < ApplicationRecord
  # 10)
  has_many :comments
end
