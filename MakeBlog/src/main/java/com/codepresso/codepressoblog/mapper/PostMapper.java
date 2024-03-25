package com.codepresso.codepressoblog.mapper;

import com.codepresso.codepressoblog.vo.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {
    List<Post> findAll();
    List<Post> findByPage(@Param("limit") Integer limit, @Param("offset") Integer offset);
    Post findOne(@Param("id") Integer id);
    Integer save(@Param("post") Post post);
    //Mybatis에서 저장 수정 삭제 시 영향을 받은 로우들의 값을 리턴 받음.
    //Save는 하나의 로우가 리턴받기 때문에 정상적으로 처리 된다면 1 받음.
}