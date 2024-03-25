package com.codepresso.codepressoblog.controller;

import com.codepresso.codepressoblog.service.PostService;
import com.codepresso.codepressoblog.vo.Post;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class PostPageController {

    private PostService postService;

    public PostPageController(PostService postService){
        this.postService = postService;
    }

    @RequestMapping("/post/{id}")
    public String getPostDetailPage(Model model, @PathVariable Integer id){
        Post post = postService.getPostById(id);
        model.addAttribute("post", post);
        return "post_detail";

    }

}
